import { DoctorLookup } from './lookup-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    $('#showDoctors').text(""); // clear the #showDoctors div everytime the Show Doctors button is clicked.
    let name = $('#name').val(); // create a name and symptom variable which will store the form inputs.
    let symptom = $('#symptom').val();
    let doctorLookup = new DoctorLookup; // create a doctorLookup variable which instantiates a new DoctorLookup object.
    let promise = doctorLookup.findDoctor(name, symptom); // calls the findDoctor function.
    promise.then(function(response) { // a call is made to the API and the function displays the results in the #showDoctors div.
      let body = JSON.parse(response);
      if ($('#name').val() == "" && $('#symptom').val() == "") { // form validation which checks for two empty input fields.
          $('#showDoctors').text(`Please enter a doctor name or health symptom.`);
        } else if (body.data.length === 0) { // checks for an empty search result
            $('#showDoctors').text(`Your search did not return any results. Please try another search.`);
            console.log("HERE");
          } else { // if at least one input is filled and the search returns at least one result, the below code runs.
          body.data.forEach(function(doctor) {
            let newPatients = ""; //create a newPatients variable which we'll call in our display.
            if (doctor.practices[0].accepts_new_patients === true) {
              newPatients = "This doctor currently accepts new patients.";
            } else {
              newPatients = "This doctor does not currently accept new patients.";
            }
            if (doctor.practices[0].website === undefined){ // checks for an undefined website, in which case we do not include the website data.
              $('#showDoctors').append(
                `<strong>${doctor.profile.last_name}, ${doctor.profile.first_name}</strong><br>
                ${doctor.practices[0].name}<br>
                ${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state}, ${doctor.practices[0].visit_address.zip}<br>
                ${doctor.practices[0].phones[0].number}<br>
                ${newPatients}<br>
                <hr>`
              );
            } else {
              $('#showDoctors').append(
                `<strong>${doctor.profile.last_name}, ${doctor.profile.first_name}</strong><br>
                ${doctor.practices[0].name}<br>
                ${doctor.practices[0].visit_address.street}, ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state}, ${doctor.practices[0].visit_address.zip}<br>
                ${doctor.practices[0].phones[0].number}<br>
                <a href='${doctor.practices[0].website}'>${doctor.practices[0].website}</a><br>
                ${newPatients}<br>
                <hr>`
              );
            }
          }, function(error) { //this function runs if there is an error with the API call.
          $('#showError').text(`There was an error processing your request: ${error.message}`);
        });
      }
    });
  });
});
