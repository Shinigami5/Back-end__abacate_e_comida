using TodoAPI.Models;
using TodoAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace TodoApi.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ReceitaController : ControllerBase
    {
        private readonly ReceitaService _RecitaService;

        public ReceitaController(ReceitaService receitaService)
        {
            _RecitaService = receitaService;
        }

        [HttpGet]
        public ActionResult<List<Receita>> Get() =>
            _RecitaService.Get();

        [HttpGet("{id:length(24)}", Name = "GetReceita")]
        public ActionResult<Receita> Get(string id)
        {
            var receita = _RecitaService.Get(id);

            if (receita == null)
            {
                return NotFound();
            }

            return receita;
        }

        [HttpPost]
        public ActionResult<Receita> Create(Receita receita)
        {
            _RecitaService.Create(receita);

            return CreatedAtRoute("GetReceita", new { id = receita.id.ToString() }, receita);
        }

        [HttpPut]
        public IActionResult Update(Receita receitaIn)
        {
            var receita = _RecitaService.Get(receitaIn.id);

            if (receita == null)
            {
                return NotFound();
            }

            _RecitaService.Update(receitaIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var receita = _RecitaService.Get(id);

            if (receita == null)
            {
                return NotFound();
            }

            _RecitaService.Remove(receita.id);

            return NoContent();
        }
    }
}