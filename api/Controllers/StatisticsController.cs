using api.data.dtos;
using Microsoft.AspNetCore.Mvc;

namespace scriptie.Controllers
{
    [ApiController]
  
    public class StatisticsController : ControllerBase
    {
        [HttpGet("api/getStatisticalSummary")]
        public async Task<IActionResult> getStatisticalSummary()
        {
            var stat = new StatisticalSummaryForReturnDTO();
            await Task.Run(() =>
            {
                stat.numberOfCases = 52;
                stat.genderFemale = 21;
                stat.genderMale = 31;
                stat.meanAge = 12;
                stat.meanAgeSTD = 2;
                stat.meanHeight = 176;
                stat.meanHeightSTD = 12;
            });

           return Ok(stat);
        }
    }
}
