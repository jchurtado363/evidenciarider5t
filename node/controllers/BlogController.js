//IMPORTAMOS MODELO
import BlogModel from "../models/BlogModel.js";
//**METODOS PARA EL CRUD **/

//MOSTRAR TODOS LOS REGISTROS 
export const getAllBlogs = async (req,res) =>{
    try{
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    }catch (error){
        res.json({ message: error.message})
    }
}
//MOSTRAR UN REGISTRO
export const getblog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{ id: req.params.id }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

//CREAR UN REGISTRO
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "registro creado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//ACTUALIZAR UN REGISTRO

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, { where: { id: req.params.id } })
        res.json({
            "message": "registro actualizado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//ELIMINAR UN REGISTRO

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({ where: { id: req.params.id } })
        res.json({
            "message": "registro eliminado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
