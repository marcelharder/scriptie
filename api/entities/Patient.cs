namespace api.entities
{
    public class Patient
    {
        public int Id { get; set; }
        public DateTime dob {get; set;}
        public float height { get; set; }
        public float weight { get; set; }
        public float age { get; set; }
        public int gender { get; set; }
        public string FEV1 { get; set; }
        public string TLC { get; set; }
        public string RV { get; set; }
        public string ERV { get; set; }
        public string IC { get; set; }
        public string VC { get; set; }
        public virtual GLI GLI {get; set;}
        public virtual CAS CAS {get; set;}

    }
}