const connection = require('../db/db.js');



//INDEX
function index (req,res) {
    const sql='SELECT * FROM `posts`';

    connection.query(sql,(err,results)=>{
        console.log(results);
        res.json((results))
        
    })




    //res.json({message:"lista dei post", posts, postsCount: posts.length})
}

//SHOW
function show (req,res) {
    const id = parseInt(req.params.id);
    const sql ='SELECT * FROM `posts` WHERE `id` = ?';
    connection.query(sql,[id],(err,results)=>{

 if (err) {
    console.log(err);
    return res.status(500).json({error:'Database query failed'});
 }
 if(results.length===0){
    return res.status(404).json({error:'post not fund'});
 }
let post =results[0];

res.json((results))
    })


    /**const post =posts.find((post) =>post.id===id);
    res.json( post )*/
}

//STORE
    function store (req,res){
    const {titolo, description, img, avaible,tags}=req.body;
   const id=posts.at(-1).id+1
    const newPost={
     id:id,
      titolo:titolo,
      description:description,
     img:img,
    avaible:avaible,
     tags:tags
     }
     posts.push(newPost)

     res.json(newPost)
 }

//UPDATE
 function update (req,res){
     const id = parseInt (req.params.id);
     const post =posts.find((post) =>post.id===id);
     const {titolo, description, img,avaible, tags}=req.body;
   
        
       post.titolo=titolo;
        post.description=description;
       post.img=img;
     post.avaible=avaible
      post.tags=tags;
        res.json(post)
 }
//DESTROY
 function destroy (req,res){
 const id = parseInt (req.params.id);
const sql ='DELETE FROM `posts` WHERE `id` = ?';
 connection.query(sql,[id],(err)=>{
    if (err){  
        console.log(err);
        
        return res.status(500).json({ error: 'processo fallito' });
    }
        res.sendStatus(204)
    
 })




  /**const eliminato =posts.find((post,index) =>post.id===id);
  console.log( "Elemento eliminato: ", eliminato);
 posts.splice(posts.indexOf(eliminato), 1);
 res.sendStatus(204);
 console.log("Lista aggiornata: ", posts);*/
 }

 module.exports = {index,show,store,update,destroy};

