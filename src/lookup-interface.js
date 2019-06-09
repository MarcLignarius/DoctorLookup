import { DoctorLookup } from './lookup-service.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#doctorSearch').submit(function(event) {
    event.preventDefault();
    $('#showDoctors').text("");
    let name = $('#name').val();
    let symptom = $('#symptom').val();
    let doctorLookup = new DoctorLookup;
    let promise = doctorLookup.findDoctor(name, symptom);
    promise.then(function(response) {
      let body = JSON.parse(response);
      if ($('#name').val() == "" && $('#symptom').val() == "") {
          $('#showDoctors').text(`Please enter a doctor name or health symptom.`);
        } else if (body.data.length === 0) {
            $('#showDoctors').text(`Your search did not return any results. Please try another search.`);
            console.log("HERE");
          } else {
          body.data.forEach(function(doctor) {
            let newPatients = "";
            if (doctor.practices[0].accepts_new_patients === true) {
              newPatients = "This doctor currently accepts new patients.";
            } else {
              newPatients = "This doctor does not currently accept new patients.";
            }
            if (doctor.practices[0].website === undefined){
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
          }, function(error) {
          $('#showError').text(`There was an error processing your request: ${error.message}`);
        });
      }

    });
  });
});
