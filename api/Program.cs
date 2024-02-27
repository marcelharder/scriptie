var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddJsonOptions(options => { options.JsonSerializerOptions.PropertyNamingPolicy = null; });
builder.Services.AddScoped<IAuthRepository, AuthRepository>();
builder.Services.AddScoped<IPatient, PatientRepo>();
builder.Services.AddScoped<IStatistics, Statistics>();

builder.Services.AddMvc().AddNewtonsoftJson(o => o.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

builder.Services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "scriptie", Version = "v1" });
});

builder.Services.AddCors(options =>
           {
               options.AddPolicy("CorsPolicy",
               builder =>
               {
                   builder.WithOrigins("http://localhost:4200")
                                       .AllowAnyHeader()
                                       .AllowCredentials()
                                       .AllowAnyMethod();
               });
           });

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
   .AddJwtBearer(options =>
   {
       options.TokenValidationParameters = new TokenValidationParameters
       {
           ValidateIssuerSigningKey = true,
           IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
           .GetBytes(builder.Configuration.GetSection("AppSettings:Token").Value)),
           ValidateIssuer = false,
           ValidateAudience = false
       };
   });
        

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseRouting();

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();


app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

app.Run();