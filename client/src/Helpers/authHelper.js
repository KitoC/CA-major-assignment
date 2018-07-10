




const isTeacher = () => {
    if (localStorage.role === 'admin') {
        return true
    } else if (localStorage.role === 'teacher') {
        return true  
    }
    return null
}

const isAdmin = () => {
    if (localStorage.role === 'admin') {
        return true
    } 
    return null
}

const isOwner = (obj) => {
    if (localStorage.role === 'admin') {
        return true
    } else if (obj.userId === localStorage.userId) {
        return true
    }
    return null
}

export {isTeacher, isOwner, isAdmin}