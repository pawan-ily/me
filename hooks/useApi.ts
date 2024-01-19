import trending from "../assets/trending.json" 
export interface TrendingMeme
{
    title:string,
    url:string,
    created_utc:number
}
export interface Meme
{
    name:string,
    image:any
}
export const useApi =()=>
{
    const getTrending =async () :Promise<TrendingMeme[]>=>
    {
        return new Promise((resolve,reject)=>
        {
            setInterval(()=>{
                resolve(trending)
            },2000)
        })
    }
    return{
        getTrending
    }
}