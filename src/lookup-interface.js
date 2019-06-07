import { DoctorLookup } from './doctor-lookup.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let doctorLookup = new DoctorLookup;
  return doctorLookup;
});
