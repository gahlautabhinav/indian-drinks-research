(() => {
  const OWNER = "gahlautabhinav/indian-drinks-research";
  const RAW = "https://raw.githubusercontent.com/" + OWNER + "/main/";
  const $ = (selector) => document.querySelector(selector);
  const state = { beverages: [], places: [], communities: [], sources: [], methods: [], practices: [], gaps: [], selected: null, tab: "overview" };
  const dossierPaths = {
    "ASM-001-JUD": "research/assam/judima.md",
    "ASM-002-NOG": "research/assam/apong-mising.md",
    "ASM-003-POR": "research/assam/apong-mising.md",
    "ASM-004-SUJ": "research/assam/sujen-deori.md",
    "ASM-005-HAL": "research/assam/karbi-hor.md",
    "ASM-006-HAR": "research/assam/karbi-hor.md",
    "ASM-007-JON": "research/assam/rabha-jonga-mod.md",
    "ASM-008-XAJ": "research/assam/tai-ahom-xajpani.md"
  };
  const dataFiles = {
    beverages: "data/beverages.csv", places: "data/places_coverage.csv", communities: "data/communities.csv",
    sources: "sources/source_register.csv", methods: "data/production_methods.csv",
    practices: "data/cultural_practices.csv", gaps: "data/research_gaps.csv"
  };
  function parseCSV(text) {
    const rows=[]; let row=[], field="", quoted=false;
    for(let i=0;i<text.length;i++) {
      const c=text[i], next=text[i+1];
      if(quoted) { if(c==='"'&&next==='"'){field+='"';i++;} else if(c==='"') quoted=false; else field+=c; }
      else if(c==='"') quoted=true;
      else if(c===','){row.push(field);field="";}
      else if(c==="\n"){row.push(field.replace(/\r$/,""));if(row.some(v=>v!==""))rows.push(row);row=[];field="";}
      else field+=c;
    }
    if(field!==""||row.length){row.push(field.replace(/\r$/,""));if(row.some(v=>v!==""))rows.push(row);}
    if(!rows.length)return [];
    const headers=rows.shift();
    return rows.map(values=>Object.fromEntries(headers.map((h,i)=>[h,values[i]??""])));
  }
  function esc(value){return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
  function shortText(s,n=145){s=String(s||"");return s.length>n?s.slice(0,n-1).trim()+"…":s;}
  function splitIDs(s){return String(s||"").split(";").map(v=>v.trim()).filter(Boolean);}
  function byBeverage(rows,id){return rows.filter(r=>splitIDs(r.Beverage_ID).includes(id)||splitIDs(r.Beverage_IDs).includes(id));}
  function githubFile(path){return "https://github.com/"+OWNER+"/blob/main/"+path;}
  async function loadData(){
    const results=await Promise.all(Object.entries(dataFiles).map(async ([key,path])=>{const response=await fetch(RAW+path);if(!response.ok)throw new Error("Could not load "+path+" ("+response.status+")");state[key]=parseCSV(await response.text());}));
    $("#stat-beverages").textContent=state.beverages.length;
    $("#stat-places").textContent=state.places.length;
    $("#stat-communities").textContent=state.communities.length;
    $("#stat-sources").textContent=state.sources.length;
    populateFilters(); renderList();
    const params=new URLSearchParams(location.search); const id=params.get("id");
    if(id&&state.beverages.some(b=>b.Beverage_ID===id))selectBeverage(id,false);
  }
  function populateFilters(){
    const states=[...new Set(state.beverages.map(b=>b.State).filter(Boolean))].sort();
    $("#state-filter").innerHTML='<option value="">All states</option>'+states.map(v=>'<option>'+esc(v)+'</option>').join("");
    const types=[...new Set(state.beverages.map(b=>b.Beverage_Type).filter(Boolean))].sort();
    $("#type-filter").innerHTML='<option value="">All beverage types</option>'+types.map(v=>'<option>'+esc(v)+'</option>').join("");
  }
  function filtered(){
    const q=$("#search").value.toLowerCase().trim(), st=$("#state-filter").value, type=$("#type-filter").value;
    return state.beverages.filter(b=>{
      if(st&&b.State!==st)return false;if(type&&b.Beverage_Type!==type)return false;
      const places=byBeverage(state.places,b.Beverage_ID).map(p=>[p.District,p.Village_or_Locality,p.Block_or_Subdistrict].join(" ")).join(" ");
      const comm=state.communities.filter(c=>splitIDs(c.Associated_Beverage_IDs).includes(b.Beverage_ID)).map(c=>c.Community_Name).join(" ");
      const hay=[b.Beverage_Name,b.Alternate_Names,b.State,b.District,b.Community,b.Beverage_Type,b.Starter_Culture,b.Source_IDs,places,comm].join(" ").toLowerCase();
      return !q||hay.includes(q);
    }).sort((a,b)=>a.Beverage_Name.localeCompare(b.Beverage_Name));
  }
  function renderList(){
    const items=filtered();$("#result-count").textContent=items.length+" records";
    $("#beverage-list").innerHTML=items.length?items.map(b=>'<button class="beverage-item '+(state.selected===b.Beverage_ID?'active':'')+'" data-id="'+esc(b.Beverage_ID)+'"><span class="item-top"><strong>'+esc(b.Beverage_Name)+'</strong><span class="item-id">'+esc(b.Beverage_ID.replace("ASM-",""))+'</span></span><small>'+esc(b.Community||"Community not specified")+' · '+esc(b.State||"")+'</small><span class="mini-tag">'+esc((b.Beverage_Type||"Traditional beverage").split(/[;(]/)[0])+'</span></button>').join(""):'<p class="pane-intro">No records match those filters.</p>';
    document.querySelectorAll(".beverage-item").forEach(btn=>btn.addEventListener("click",()=>selectBeverage(btn.dataset.id,true)));
  }
  function field(label,value,full=false){
    return '<div class="field-card '+(full?'full':'')+'"><label>'+esc(label)+'</label><p class="'+(!value?'empty':'')+'">'+esc(value||"Not yet documented")+'</p></div>';
  }
  function setTab(tab){
    state.tab=tab;
    document.querySelectorAll(".content-tabs button").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
    document.querySelectorAll(".tab-pane").forEach(p=>p.classList.toggle("active",p.dataset.pane===tab));
  }
  function recordCard(title,body,meta,extra=""){
    return '<div class="record-card"><div class="record-meta">'+esc(meta||"Archive record")+'</div><h4>'+esc(title||"Untitled record")+'</h4><p>'+esc(body||"No description recorded.")+'</p>'+extra+'</div>';
  }
  function renderDetail(b){
    const id=b.Beverage_ID, sources=splitIDs(b.Source_IDs).map(s=>state.sources.find(x=>x.Source_ID===s)).filter(Boolean);
    const places=byBeverage(state.places,id), methods=byBeverage(state.methods,id), practices=byBeverage(state.practices,id), gaps=state.gaps.filter(g=>g.Beverage_ID===id), community=state.communities.find(c=>splitIDs(c.Associated_Beverage_IDs).includes(id));
    const dossier=dossierPaths[id];
    $("#detail").innerHTML='<header class="detail-header"><div class="eyebrow"><span class="live-dot"></span>'+esc(b.State||"India")+' / '+esc(id)+'</div><h2>'+esc(b.Beverage_Name)+'</h2><div class="alt-names">'+esc(b.Alternate_Names||"No alternate names recorded")+'</div><div class="detail-meta"><span class="pill strong">'+esc(b.Community||"Community pending")+'</span><span class="pill">'+esc(b.Beverage_Type||"Type pending")+'</span><span class="pill">'+esc(b.Evidence_Level||"Evidence pending")+'</span></div><div class="detail-actions">'+(dossier?'<a class="action-link" href="'+githubFile(dossier)+'" target="_blank" rel="noreferrer">Read full dossier ↗</a>':'')+'<a class="action-link" href="'+githubFile("data/beverages.csv")+'" target="_blank" rel="noreferrer">Open data record ↗</a><button class="action-button" id="share-record">Copy record link</button></div></header><div class="content-tabs"><button class="active" data-tab="overview">Overview</button><button data-tab="dossier">Dossier</button><button data-tab="places">Places <span>('+places.length+')</span></button><button data-tab="methods">Methods <span>('+methods.length+')</span></button><button data-tab="culture">Culture <span>('+practices.length+')</span></button><button data-tab="sources">Sources <span>('+sources.length+')</span></button><button data-tab="gaps">Open questions <span>('+gaps.length+')</span></button></div><section class="tab-pane active" data-pane="overview"><div class="field-grid">'+field("Traditional process",b.Traditional_Process_Summary,true)+field("Ingredients",b.Primary_Ingredients)+field("Starter culture",b.Starter_Culture)+field("Traditional equipment",b.Traditional_Equipment)+field("Cultural significance",b.Cultural_Significance,true)+field("Reported localities",b.Village_or_Locality||b.District,true)+field("Current status",b.Current_Status,true)+field("Variant / synonym notes",b.Variant_or_Synonym_Notes,true)+field("Geographic confidence",b.Geographic_Confidence)+field("GI / heritage status",b.GI_or_Heritage_Status)+field("Research questions",b.Open_Questions,true)+'</div>'+(community?'<h3 class="pane-title" style="margin-top:28px">Community context</h3><div class="field-grid">'+field("Regions",community.Districts_or_Regions,true)+field("Terminology",community.Language_or_Local_Terminology,true)+field("Knowledge sensitivity",community.Knowledge_Sensitivity_Notes,true)+'</div>':'')+'</section><section class="tab-pane" data-pane="dossier"><div id="dossier-content" class="dossier-content"><p class="dossier-loading">Loading the full research dossier…</p></div></section><section class="tab-pane" data-pane="places"><h3 class="pane-title">Geographic coverage</h3><p class="pane-intro">Place evidence is labelled by what the source actually establishes. A sample location is not automatically a current production site.</p><div class="record-list">'+(places.map(p=>recordCard(p.Village_or_Locality||p.Block_or_Subdistrict||p.District,p.Evidence_for_Production_or_Consumption,p.District+' · '+p.Coverage_Status,'<a href="'+githubFile("data/places_coverage.csv")+'" target="_blank" rel="noreferrer">Open coverage CSV ↗</a>')).join("")||'<p class="pane-intro">No place records linked yet.</p>')+'</div></section><section class="tab-pane" data-pane="methods"><h3 class="pane-title">Production & starter methods</h3><p class="pane-intro">Method descriptions preserve source-specific variation rather than implying one universal recipe.</p><div class="record-list">'+(methods.map(m=>recordCard(m.Stage,m.Method_Description,(m.Method_ID||"")+" · "+(m.Reported_Duration_or_Conditions||"Conditions not reported"))).join("")||'<p class="pane-intro">No method records linked yet.</p>')+'</div></section><section class="tab-pane" data-pane="culture"><h3 class="pane-title">Cultural practices</h3><div class="record-list">'+(practices.map(p=>recordCard(p.Occasion_or_Context,p.Practice_Description,p.District+" · "+p.Evidence_Type)).join("")||'<p class="pane-intro">No cultural practice records linked yet.</p>')+'</div></section><section class="tab-pane" data-pane="sources"><h3 class="pane-title">Source register</h3><p class="pane-intro">Open a source to review the original material and its limitations.</p><div class="record-list">'+(sources.map(s=>recordCard(s.Title,s.Claims_Supported,s.Source_ID+" · "+s.Year+' · '+s.Author_or_Organisation,'<a class="source-url" href="'+esc(s.URL)+'" target="_blank" rel="noreferrer">Open source ↗</a><p>'+esc(s.Limitations_or_Caveats||"Limitations not recorded")+'</p>')).join("")||'<p class="pane-intro">No source IDs matched this record.</p>')+'</div></section><section class="tab-pane" data-pane="gaps"><h3 class="pane-title">What we still need to learn</h3><p class="pane-intro">Research gaps are first-class records, not omissions to be filled with guesses.</p><div class="record-list">'+(gaps.map(g=>recordCard(g.Question_or_Gap,g.Why_It_Matters,g.Priority+" priority · "+g.Status,"<p><strong>Next:</strong> "+esc(g.Next_Action)+"</p>")).join("")||'<p class="pane-intro">No beverage-specific gap records linked yet.</p>')+'</div></section>';
    document.querySelectorAll(".content-tabs button").forEach(btn=>btn.addEventListener("click",()=>{setTab(btn.dataset.tab);if(btn.dataset.tab==="dossier")loadDossier(b);}));
    $("#share-record").addEventListener("click",async()=>{const url=location.origin+location.pathname+"?id="+encodeURIComponent(id)+"#archive";try{await navigator.clipboard.writeText(url);showToast("Record link copied");}catch{showToast(url);}});
    if(state.tab==="dossier")loadDossier(b);
  }
  async function loadDossier(b){
    const holder=$("#dossier-content");if(!holder)return;
    const path=dossierPaths[b.Beverage_ID];
    if(!path){holder.innerHTML='<p class="pane-intro">A dedicated dossier has not been added yet. The overview and linked source records are available.</p>';return;}
    if(holder.dataset.loaded==="true")return;
    try{
      const response=await fetch(RAW+path);if(!response.ok)throw new Error("Dossier not found");
      const markdown=await response.text();
      if(window.marked&&window.marked.parse)holder.innerHTML=window.marked.parse(markdown);
      else holder.innerHTML="<pre>"+esc(markdown)+"</pre>";
      holder.dataset.loaded="true";
    }catch(e){holder.innerHTML='<div class="error-note">The dossier could not be loaded right now. <a href="'+githubFile(path)+'" target="_blank" rel="noreferrer">Open it directly on GitHub ↗</a></div>';}
  }
  function selectBeverage(id,scroll){
    state.selected=id;state.tab="overview";const b=state.beverages.find(x=>x.Beverage_ID===id);if(!b)return;
    renderList();renderDetail(b);
    const url=new URL(location.href);url.searchParams.set("id",id);history.replaceState(null,"",url);
    if(scroll&&window.matchMedia("(max-width: 640px)").matches)$("#detail").scrollIntoView({behavior:"smooth",block:"start"});
  }
  function showToast(message){const t=$("#toast");t.textContent=message;t.hidden=false;window.setTimeout(()=>t.hidden=true,2600);}
  $("#search").addEventListener("input",renderList);$("#state-filter").addEventListener("change",renderList);$("#type-filter").addEventListener("change",renderList);
  document.addEventListener("keydown",e=>{if(e.key==="/"&&document.activeElement.tagName!=="INPUT"&&document.activeElement.tagName!=="TEXTAREA"){e.preventDefault();$("#search").focus();}if(e.key==="Escape")$("#search").blur();});
  loadData().catch(err=>{$("#beverage-list").innerHTML='<div class="error-note">Could not load archive data. Check your connection and refresh the page.</div>';$("#result-count").textContent="Unavailable";console.error(err);});
})();