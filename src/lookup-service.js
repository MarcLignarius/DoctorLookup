`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=or-portland&user_location=45.523064%2C%20-122.676483&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

export class DoctorLookup
{
  findDoctor(name, symptom) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${symptom}&location=or-portland&user_location=45.523064%2C%20-122.676483&sort=full-name-asc&skip=0&limit=100&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
