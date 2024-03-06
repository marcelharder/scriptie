using api.data.dtos;
using Microsoft.AspNetCore.Mvc;

namespace scriptie.Controllers
{


    [ApiController]
    public class StatisticsController : ControllerBase
    {
        private IStatistics _stat;
        public StatisticsController(IStatistics stat)
        {
            _stat = stat;
        }
        [HttpGet("api/getStatisticalSummary")]
        public async Task<IActionResult> getStatisticalSummary()
        {
            var result = await _stat.getDescriptiveStatistics();
            return Ok(result);
        }
    }
}
