export const getAllApps=async()=>{
const res=await fetch('https://hero-app-tan.vercel.app/data.json')
const data=await res.json()
return data
}