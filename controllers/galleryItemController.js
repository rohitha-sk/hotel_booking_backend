import GalleryItem from "../models/galleryItems.js"

export function createGalleryItem(req,res){
    const galleryItem = req.body

    const newGalleryItem = new GalleryItem(galleryItem)
    console.log(newGalleryItem);
    newGalleryItem.save().then(
        ()=>{
            res.json({
                message:"Gallery item created successfully!"
            })
        }
    ).catch(
        ()=>{
            res.status(201).json({
                message: "Gallery item created successfully!",
            });
            
        }
    )
}

export function getGalleryItems(req,res){
    
    GalleryItem.find().then(
        (list)=>{
            res.json({
                list:list
            })
        }
    )
}