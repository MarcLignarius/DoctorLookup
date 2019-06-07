export class DoctorLookup
{
  findDoctor(name, healthIssue) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = //TBD;
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
