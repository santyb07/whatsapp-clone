import Conversation from "../model/Conversation.js";


export const newConversation= async(request,response)=>{
    try{
        const senderId= request.body.senderId;
        const receiverId= request.body.receiverId;

        // console.log('receiver id:'+receiverId)
        // console.log('sender id:'+senderId)

        const exist= await Conversation.findOne({members:{$all:[receiverId,senderId]}})

        if(exist){
            return response.status(200).json('conversation already exists');
        }

        const newConversation= new Conversation({
            members:[senderId,receiverId]
        })
        await newConversation.save();
        return response.status(200).json('conversation saved successfully.')
    }catch(error){
        return response.status(500).json(error)
    }
}

export const getConversation = async(request,response)=>{
    try{
        const senderId= request.body.senderId;
        const receiverId= request.body.receiverId;
        // console.log('receiver id:'+receiverId)
        // console.log('sender id:'+senderId)
        let conversation = await Conversation.findOne({members:{$all:[senderId,receiverId]}})
        // console.log(conversation)
        return response.status(200).json(conversation)
    }catch(error){
        return response.status(500).json(error.message)
    }
}