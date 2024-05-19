export const trending= (req,res)=>{
    return res.send('homdpage videos');
}
 
export const see = (req,res)=>{
    console.log('hello',req.params);
    return res.send(`Watch Video # ${req.params.id}`);
}
export const edit = (req,res)=>{
    return res.send('edit video');
}

export const search =(req,res)=>{
    return res.send('search video');
}

export const upload =(req,res)=>{
    return res.send('upload video');
}
export const deleteVideo =(req,res)=>{
    return res.send('delete video');
}

