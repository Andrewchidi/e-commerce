


export const generateAuthToken = (user)=>{
  return JsonWebTokenError.sign({
    id:user._id,
    userName
  })
}