const Home = ()=>{
    return(
        <div className = 'container-fluid' style = {{backgroundImage: 'url(https://assets2.rappler.com/2021/01/carousel-2.jpg)', height: '100vh', backgroundRepeat:'none', backgroundSize: 'cover', paddingTop: '300px'}}>
            <h1 className = 'text-center my-5 bg-primary text-white w-50 mx-auto p-2' style ={{fontSize: '36px'}}>Wellcome to our albums App</h1>
        </div>
    )
}

export default Home;

/* export default function Home(){
    return(
        <div className = 'container'>
            <h1 className = 'text-center my-5'>Wellcome to our albums App</h1>
        </div>
    )
} */