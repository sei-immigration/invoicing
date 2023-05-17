function main(args) {
    let appointment = args.appointment
    let name = appointment.fullName || 'stranger'
    let greeting = 'Hello ' + name + '!'
    console.log(greeting)
    return { body: appointment }
}

exports.main = main