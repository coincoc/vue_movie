export default{
    path:"/movie",
    component:()=>import("@/views/movie"),
    children:[
        {
            path:"nowplaying",
            component:()=>import("@/views/movie/nowplaying"),
        },
        {
            path:"comingsoon",
            component:()=>import("@/views/movie/comingsoon"),
        },
        {
            path:"/movie",
            redirect:"/movie/nowplaying"
        }
    ],

}