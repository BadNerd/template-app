const Content = () => {

    const generateName = () => {
        const names = ["Dave","Jack","Murphy","Javier"]
        let i = Math.floor(Math.random() * 4);
        return names[i];
    }
    const name = generateName();
    const fn = e => {
        console.log(e.target)
    }
    const fn2 = e => {
        console.log(e)
    }
    return(
    <main>
        <p>My name is {name}</p>
        <button onClick={fn}>Click Me</button>
        <button onClick={() => fn2("uwu")}>Click Me</button>
    </main>
    )

}

export default Content
