function main(args) {
    let appointment = args.appointment
    let name = appointment.fullName || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return {
        body: getBlob(),
        headers: { 'Content-Type': 'image/png' }
    }
}

async function getBlob() {
    const response = await fetch('https://seimm.ca/logo.png')
    return response.blob()
}

exports.main = main