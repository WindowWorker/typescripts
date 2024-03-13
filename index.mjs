/** 
Root Fallback
<style>
*{display:none;}
</style>
<script>
void async function(){
if(location.host.endsWith('vercel.app')){
location.replace('https://typescripts.org/');
}
let root=await fetch('/_root');
let homePage=await root.text();

document.write(homePage);

}();
</script>
*/

import './api/index.mjs';
