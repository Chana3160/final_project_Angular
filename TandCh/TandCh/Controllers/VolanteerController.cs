using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TandCh.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class VolanteerController : ControllerBase
  {
    public static List<volanteer> volanteerList = new List<volanteer>()
    {
    new volanteer{name = "Daniel"  , days = new bool[]{  true, false,true, false, true, true}, id="111"},
     new volanteer { name = "Michael", days = new bool[] { false, true, false, false, true, false } ,id="222"},
    new volanteer { name = "Elchanan", days = new bool[] { true, false, true, false, false, false } ,id="333" },
    new volanteer { name = "Yedidya", days = new bool[] { false, true, false, true, false, true }  ,id="444"},
    new volanteer { name = "Chagay", days = new bool[] { true, false, true, true, true, false } ,id="555" },
    new volanteer { name = "Netanel", days = new bool[] { true, false, false, true, false, true } ,id="666" },
        };

   private static string[] saveDays = { "", "", "", "", "", "" };
       




        // GET: api/<VolanteerController>
        [HttpGet]
    public List<volanteer> Get()
    {
            return volanteerList;
        }

    // GET api/<VolanteerController>/5
    [HttpGet("{id}")]
    public volanteer Get(string id)
    {
     foreach(var v in volanteerList)
            {
                if (id == v.id)
                {
                    return v;
                }
            }
            return null;
    }

    // POST api/<VolanteerController>
    [HttpPost]
    public string[] Post([FromBody] string[] value)
    {
            for(var i=0; i<value.Length; i++)
            {
                saveDays[i] =value[i];
            }
            return saveDays;
    }

    // PUT api/<VolanteerController>/5
    [HttpPut]
    public bool Put(volanteer vol)
    {
            foreach(var v in volanteerList)
            {
                if(v.id == vol.id)
                {
                    v.name = vol.name;

                    //for(int i=0; i<saveDays.Length; i++)
                    //{
                    //    if (vol.name != saveDays[i]) {
                    //        if (v.days[i] == true)
                    //            v.days[i] = false;
                    //    }
                    //    else {
                    //        v.days[i] = vol.days[i];
                    //        return true;
                    //    }
                    //}

                    for (int i = 0; i < vol.days.Length; i++)
                    {
                        if (vol.days[i] == true)
                        {
                            if (v.days[i] == false)
                            {
                                v.days[i] = true;
                                return true;
                            }
                        }
                        else
                        {
                            if (saveDays[i] == vol.name)
                                return false;
                            else
                                v.days[i] = false;
                                return true;
                                
                        }
                    }
                                     

                    }
            }
            return true;
    }

    // DELETE api/<VolanteerController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }

    [HttpGet]
    [Route("GetByDay")]
        public volanteer[]  GetByDay(int day)
        {
            volanteer[] volunteersByDay = volanteerList.FindAll(v => v.days[day] == true).ToArray();
            return volunteersByDay;
            
        }

        [HttpGet]
        [Route("GetSave")]
        public string[] GetSave()
        {    
            return saveDays;
        }
    }
}
