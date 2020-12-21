using System.ComponentModel.DataAnnotations; 

namespace EtterForskerAPI.Models{


public class Case  {

[Key]

public int Id { get; set;  }
public string File { get; set;  }
public string Info { get; set; }
public string Solved { get; set; }
public string ImageSrc { get; set; }







}





}