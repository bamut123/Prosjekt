using Microsoft.EntityFrameworkCore;

namespace EtterForskerAPI.Models{
    public class EtterForskerContext : DbContext {

        public EtterForskerContext(DbContextOptions<EtterForskerContext> options):base(options){}


        public DbSet<EtterForskerAPI.Models.Case> Case { get; set;  }





    }
}