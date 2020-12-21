using Microsoft.AspNetCore.Mvc;
using EtterForskerAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace EtterForskerAPI.Controllers{
    [ApiController]
    [Route("[controller]")]

    public class CasesController : ControllerBase {

        private readonly EtterForskerContext _context;

        private readonly IWebHostEnvironment _hosting;
        public CasesController(EtterForskerContext context, IWebHostEnvironment hosting ){
            _context = context;
            _hosting = hosting;
        }

 [HttpGet]
        public async Task<IEnumerable <Case> > Get(){
        List<Case> caseList = await _context.Case.ToListAsync();

        return caseList;
    }

 [HttpGet("{id}")]
 
        public async Task <Case>  Get(int id){
            
        Case getCase = await _context.Case.FindAsync(id);
        
        return getCase;
    }
        


[HttpPost]
public async Task<Case> Post(Case caseFile){
    _context.Case.Add(caseFile);
    await _context.SaveChangesAsync();
    return caseFile;
}

[HttpPost]
[Route("savepicture")]
public void SavePicture(IFormFile file){
    string webrootpath = _hosting.WebRootPath;
    string absolutepath = Path.Combine($"{webrootpath}/images/{file.FileName}");
    using(var filestream = new FileStream(absolutepath, FileMode.Create ) ){
        file.CopyTo(filestream);
    }
}

[HttpPut]

public async Task<Case> Put(Case updateCase){
    _context.Update(updateCase);
    await _context.SaveChangesAsync();
    
    return updateCase;
}




[HttpDelete("{id}")]

public async Task<Case> Delete(int id){
    Case casetoDelete = await _context.Case.FirstAsync( Case => Case.Id == id );
    _context.Case.Remove(casetoDelete);
    await _context.SaveChangesAsync();
    return casetoDelete;
}









    }







}