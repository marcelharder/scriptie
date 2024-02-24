using System.Data.Common;
using System.Threading.Tasks;
using api.entities;
using api.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace scriptie.Controllers
{
    [ApiController]
   
    public class PatientsController : ControllerBase
    {
        private IPatient _patient;
        public PatientsController(IPatient patient)
        {
            _patient = patient;
        }
        [HttpPost("api/")]
        public async Task<IActionResult> addPatient()
        {
            var newPatient = new Patient();
            _patient.Add(newPatient);
            if (await _patient.SaveAll())
            {
                return CreatedAtRoute("getPatient", new { id = newPatient.Id }, newPatient);
            };
            return BadRequest("cant add patient");
        }
        
        [HttpGet("api/{id}", Name = "getPatient")]
        public async Task<IActionResult> getPatient(int id)
        {
            return Ok(await _patient.getSpecificPatient(id));
        }
        
        [HttpGet("api/getPatientList")]
        public async Task<IActionResult> getListOfPatients(){
            return Ok( await _patient.getListOfPatients());
        }
        
        [HttpPut("api/")]
        public async Task<IActionResult> updatePatient([FromBody] Patient pat){
             _patient.Update(pat);
             if(await _patient.SaveAll()){return Ok();} else {return BadRequest("");}
        }
    
        
    
    
    
    }
}
