export function userValidation(userIsSignedIn, email = '') {

    const path = window.location.pathname

    if (!userIsSignedIn) {
        const isHome = path === '/'
        const isLogin =  path.includes('login')
        const isSingUp =  path.includes('sign-up')
        const header = document.querySelector('header-component')
        if(header) header.removeAttribute('logged')
        if (!isHome && !isLogin && !isSingUp){
            window.location.replace('/login/')
        }
    } else {
        const isLogin =  path.includes('login')
        const isSingUp =  path.includes('sign-up')
        if (isSingUp || isLogin){
            console.log('will redirect to home')
            window.location.replace('/')
        }
        const header = document.querySelector('header-component')
        //console.log(header)
        if(header){
            header.setAttribute('logged', true)
            header.setAttribute('email', email)
        }
    }
}