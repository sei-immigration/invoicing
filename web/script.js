function generateInvoice() {
  content = document.getElementById('invoice-body').value
  console.log(content)

  eventNameRegex = '.*Event\n\n(.*)\n.*'
  var eventName = content.match(eventNameRegex)[1]

  inviteeNameRegex = '.*Invitee Name\n\n(.*)\n.*'
  var inviteeName = content.match(inviteeNameRegex)[1]

  inviteeEmailRegex = '.*Invitee Email\n\n(.*)\n.*'
  var inviteeEmail = content.match(inviteeEmailRegex)[1]

  consultationDateRegex = '.*Date\n\n(.*)\n.*'
  var consultationDate = content.match(consultationDateRegex)[1]

  consultationMeetingLinkRegex = '.*Location\n\n(.*)\n.*'
  var consultationMeetingLink = content.match(consultationMeetingLinkRegex)[1]

  priceRegex = '.*Price\n\n(.*)\n.*'
  var price = content.match(priceRegex)[1]

  fullNameRegex = '.*Enter full name for terms agreement\n\n(.*)\n.*'
  var fullName = content.match(fullNameRegex)[1]

  phoneNumberRegex = '.*Phone Number\n\n(.*)\n.*'
  var phoneNumber = content.match(phoneNumberRegex)[1]

  document.getElementById('booked-event-name').innerHTML = eventName
  document.getElementById('invitee-name').innerHTML = inviteeName
  document.getElementById('invitee-email').innerHTML = inviteeEmail
  document.getElementById('consultation-date').innerHTML = consultationDate
  document.getElementById('consultation-meeting-link').innerHTML = consultationMeetingLink
  document.getElementById('price').innerHTML = price
  document.getElementById('full-name').innerHTML = fullName
  document.getElementById('phone-number').innerHTML = phoneNumber

  downloadInvoice();
}

async function downloadInvoice() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  raw = '{name}'

  requestBody = {
    name: 'Imran'
  }

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
    requestMode: 'no-cors'
  };

  const response = await fetch("https://faas-sfo3-7872a1dd.doserverless.co/api/v1/web/fn-1b044228-58fb-4834-90f1-10f1250b0ff6/default/invoicing", requestOptions);
  const jsonData = await response.json();
  console.log(jsonData);
}