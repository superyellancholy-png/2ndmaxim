'use strict';
const fs=require('node:fs'),path=require('node:path'),{createHash}=require('node:crypto');
module.exports=function sharedAssets(out){
 return (bytes,type='image/png')=>{
  const ext=type==='font/ttf'?'ttf':type==='font/otf'?'otf':'png';
  const name=createHash('sha256').update(bytes).digest('hex')+'.'+ext;
  const dir=path.join(out,'_assets'),file=path.join(dir,name);
  fs.mkdirSync(dir,{recursive:true});
  if(!fs.existsSync(file))fs.writeFileSync(file,bytes);
  return '_assets/'+name;
 };
};
