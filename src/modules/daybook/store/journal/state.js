/* export default  ()=> ({
    
}) */


export default ()=>({
    isLoading:true,
    entries:[
        {
            id:new Date().getTime(),
            date: new Date().toDateString(),
            text:'Dolore veniam irure officia commodo anim elit ut sint ex pariatur exercitation consequat.',
            picture:null
        },
        {
            id:new Date().getTime()*5,
            date: new Date().toDateString(),
            text:'Adipisicing in aute excepteur ipsum cillum aliqua aliquip culpa pariatur enim exercitation qui eiusmod.',
            picture:null
        },
        {
            id:new Date().getTime()*10,
            date: new Date().toDateString(),
            text:'Non consequat Lorem dolor officia occaecat deserunt mollit cillum amet ex quis est velit laborum..',
            picture:null
        },
    ]
})