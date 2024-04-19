
exports.homepage= async (req,res)=>{
    const locals={
        title:"Sadda home page",
        description:"HEllo ji"
    }
    res.render('index',{
        locals,
        layout: "../views/layouts/front-page"
    });
}
exports.about= async (req,res)=>{
    const locals={
        title:"Sadda about page",
        description:"HEllo ji"
    }
    res.render('about',locals);
}