using System.Windows.Markup;
using api.data.dtos;

namespace api.implementations;

public class Statistics : IStatistics
{
    private DataContext _data;
    public Statistics(DataContext data)
    {
        _data = data;
    }
    public async Task<CAS> CalculateCASBDR(string value)
    {
        var result = new CAS();
        await Task.Run(() =>
       {
           result.predicted = "1";
           result.Perc_Predicted = "5";
           result.BDR_perc_changed = "3";
           result.LLN = "2";
           result.ULN = "34";
           result.zscore = "2";
           result.predicted = "9";
           result.measured = value;

       });

        return result;
    }

    public async Task<CAS> CalculateCASERV(string value)
    {
        var result = new CAS();
        await Task.Run(() =>
       {
           result.predicted = "11";
           result.Perc_Predicted = "15";
           result.BDR_perc_changed = "13";
           result.LLN = "12";
           result.ULN = "134";
           result.zscore = "12";
           result.predicted = "19";
           result.measured = value;


       });

        return result;
    }

    public async Task<CAS> CalculateCASFEV1(ingredientsCalculateCASDTO ing)
    {
       /*  // find out if this record exists in the database
       
        if (selected != null)
        {
            // edit this cas record
               selected.measured = ing.measured.ToString();
               selected.predicted = "21";
               selected.Perc_Predicted = "25";
               selected.BDR_perc_changed = "23";
               selected.LLN = "22";
               selected.ULN = "234";
               selected.zscore = "22";
               _data.cas.Update(selected);
               
               

        }
        else
        { */
            var result = new CAS();
            await Task.Run(() =>
           {
               result.CasId = ing.Id;
               result.measured = ing.measured.ToString();
               result.predicted = "21";
               result.Perc_Predicted = "25";
               result.BDR_perc_changed = "23";
               result.LLN = "22";
               result.ULN = "234";
               result.zscore = "22";
           });
     //   }

        return result;
    }

    public async Task<CAS> CalculateCASIC(string value)
    {
        var result = new CAS();
        await Task.Run(() =>
       {
           result.predicted = "31";
           result.Perc_Predicted = "35";
           result.BDR_perc_changed = "33";
           result.LLN = "32";
           result.ULN = "334";
           result.zscore = "32";
           result.predicted = "39"; result.measured = value;


       });

        return result;
    }

    public async Task<CAS> CalculateCASRV(string value)
    {
        var result = new CAS();
        await Task.Run(() =>
       {
           result.predicted = "41";
           result.Perc_Predicted = "45";
           result.BDR_perc_changed = "43";
           result.LLN = "42";
           result.ULN = "434";
           result.zscore = "42";
           result.predicted = "49"; result.measured = value;


       });

        return result;
    }

    public async Task<CAS> CalculateCASTLC(string value)
    {
        var result = new CAS();
        await Task.Run(() =>
       {
           result.predicted = "51";
           result.Perc_Predicted = "55";
           result.BDR_perc_changed = "53";
           result.LLN = "52";
           result.ULN = "534";
           result.zscore = "52";
           result.predicted = "59"; result.measured = value;


       });

        return result;
    }

    public async Task<CAS> CalculateCASVC(string value)
    {
        var result = new CAS();
        await Task.Run(() =>
       {
           result.predicted = "61";
           result.Perc_Predicted = "65";
           result.BDR_perc_changed = "63";
           result.LLN = "62";
           result.ULN = "634";
           result.zscore = "62";
           result.predicted = "69"; result.measured = value;


       });

        return result;
    }

    public async Task<GLI> CalculateGLIERV(string value)
    {
        var result = new GLI();
        await Task.Run(() =>
       {
           result.predicted = "71";
           result.Perc_Predicted = "75";
           result.BDR_perc_changed = "73";
           result.LLN = "72";
           result.ULN = "734";
           result.zscore = "72";
           result.predicted = "79"; result.measured = value;


       });

        return result;
    }

    public async Task<GLI> CalculateGLIFEV1(ingredientsCalculateCASDTO ing)
    {
        var result = new GLI();
        await Task.Run(() =>
       {
           result.GliId = ing.Id;
           result.measured = ing.measured.ToString();
           result.predicted = "81";
           result.Perc_Predicted = "85";
           result.BDR_perc_changed = "83";
           result.LLN = "82";
           result.ULN = "834";
           result.zscore = "82";


       });

        return result;
    }

    public async Task<GLI> CalculateGLIIC(string value)
    {
        var result = new GLI();
        await Task.Run(() =>
       {
           result.predicted = "91";
           result.Perc_Predicted = "95";
           result.BDR_perc_changed = "93";
           result.LLN = "92";
           result.ULN = "934";
           result.zscore = "92";
           result.predicted = "99"; result.measured = value;


       });

        return result;
    }

    public async Task<GLI> CalculateGLIRV(string value)
    {
        var result = new GLI();
        await Task.Run(() =>
       {
           result.predicted = "101";
           result.Perc_Predicted = "105";
           result.BDR_perc_changed = "103";
           result.LLN = "102";
           result.ULN = "1034";
           result.zscore = "102";
           result.predicted = "109"; result.measured = value;


       });

        return result;
    }

    public async Task<GLI> CalculateGLITLC(string value)
    {
        var result = new GLI();
        await Task.Run(() =>
       {
           result.predicted = "111";
           result.Perc_Predicted = "115";
           result.BDR_perc_changed = "113";
           result.LLN = "112";
           result.ULN = "1134";
           result.zscore = "112";
           result.predicted = "119"; result.measured = value;


       });

        return result;
    }

    public async Task<GLI> CalculateGLIVC(string value)
    {
        var result = new GLI();
        await Task.Run(() =>
       {
           result.predicted = "121";
           result.Perc_Predicted = "125";
           result.BDR_perc_changed = "123";
           result.LLN = "122";
           result.ULN = "1234";
           result.zscore = "122";
           result.predicted = "129"; result.measured = value;


       });

        return result;
    }

    public async Task<StatisticalSummaryForReturnDTO> getDescriptiveStatistics()
    {
        var total = 0;
        var maleCount = 0;
        var femaleCount = 0;
        var heightCount = new List<float>();
        var ageCount = new List<double>();
        // get list of patients
        var list = await _data.Patients.ToListAsync();
        foreach (Patient p in list)
        {
            total = total + 1;
            if (p.gender == "Male") { maleCount++; }
            if (p.gender == "Female") { femaleCount++; }
            heightCount.Add(p.height);
            ageCount.Add(p.age);

        }
        var stat = new StatisticalSummaryForReturnDTO();


        stat.numberOfCases = total;
        stat.genderFemale = femaleCount;
        stat.genderMale = maleCount;
        stat.meanAge = getMean(ageCount);
        stat.meanAgeSTD = getSTD02(ageCount);
        stat.meanHeight = getMeanFloat(heightCount);
        stat.meanHeightSTD = getSTD03(heightCount);

        return stat;
    }


    #region Calculations


    private double getMeanFloat(List<float> heightCount) { return heightCount.Average(); }
    private double getMean(List<double> ageCount) { return ageCount.Average(); }
    public static double getSTD02(List<double> ageCount)
    {

        var count = ageCount?.Count() ?? 0;
        if (count < 1) return 0;
        var avg = ageCount.Average();
        var sum = ageCount.Sum(d => Math.Pow(d - avg, 2));
        return Math.Sqrt(sum / count);

    }
    public static double getSTD03(List<float> ageCount)
    {

        var count = ageCount?.Count() ?? 0;
        if (count < 1) return 0;
        var avg = ageCount.Average();
        var sum = ageCount.Sum(d => Math.Pow(d - avg, 2));
        return Math.Sqrt(sum / count);

    }

    public List<scatterDataDTO> getScatterData()
    {
        var list = new List<scatterDataDTO>();
        var scatter = new scatterDataDTO();
        Random rnd = new Random();

        for (int x = 0; x < 50; x++)
        {

            scatter = new scatterDataDTO();
            scatter.x = rnd.Next(1, 25);
            scatter.y = rnd.Next(1, 25);
            list.Add(scatter);

        }
        return list;
    }


    #endregion
}
