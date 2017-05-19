using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BuildSystemTest.Controllers
{
  [Produces("application/json")]
  [Route("api/Test")]
  public class TestController : Controller
  {
    [HttpGet]
    public List<int> GetValues()
    {
      return new List<int>() { 1, 2 };
    }
  }
}