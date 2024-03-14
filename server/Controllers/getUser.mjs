export const getUser = (req, res)=> {
    const id = req.params.id;
    console.log(id)
    res.json({"id":id,"name":"rohan","age":"25","city":"pune","country":"india" });
}