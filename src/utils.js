const apiKey = "$2b$10$YtglDrWiRzphuz5Z9vlh.uA/Ak0ZnHcvSIAUZr0y5B5SK.E/KPFbe"
const binId = "63288388a1610e6386307232"

export const readData =  async () => {

    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': `${apiKey}`
        }
    })

    return response.json()

}


export const updateData = async (taskList) => {
    
    const response = await fetch(`https://api.jsonbin.io/v3/b/${binId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': `${apiKey}`
        },
        body: JSON.stringify(taskList)
    })
    
    return response.json()
}