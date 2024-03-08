﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.data;

#nullable disable

namespace scriptie.data.migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.13");

            modelBuilder.Entity("api.entities.AppUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("active")
                        .HasColumnType("TEXT");

                    b.Property<string>("center_id")
                        .HasColumnType("TEXT");

                    b.Property<string>("contributor_id")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("created")
                        .HasColumnType("TEXT");

                    b.Property<string>("deployed_url")
                        .HasColumnType("TEXT");

                    b.Property<string>("email")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("paid_till")
                        .HasColumnType("TEXT");

                    b.Property<string>("photoUrl")
                        .HasColumnType("TEXT");

                    b.Property<string>("user_role")
                        .HasColumnType("TEXT");

                    b.Property<string>("username")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("api.entities.CAS", b =>
                {
                    b.Property<int>("CasId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("BDR_perc_changed")
                        .HasColumnType("TEXT");

                    b.Property<string>("LLN")
                        .HasColumnType("TEXT");

                    b.Property<int>("PatientId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Perc_Predicted")
                        .HasColumnType("TEXT");

                    b.Property<string>("ULN")
                        .HasColumnType("TEXT");

                    b.Property<string>("measured")
                        .HasColumnType("TEXT");

                    b.Property<string>("predicted")
                        .HasColumnType("TEXT");

                    b.Property<string>("zscore")
                        .HasColumnType("TEXT");

                    b.HasKey("CasId");

                    b.HasIndex("PatientId")
                        .IsUnique();

                    b.ToTable("cas");
                });

            modelBuilder.Entity("api.entities.GLI", b =>
                {
                    b.Property<int>("GliId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("BDR_perc_changed")
                        .HasColumnType("TEXT");

                    b.Property<string>("LLN")
                        .HasColumnType("TEXT");

                    b.Property<int>("PatientId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Perc_Predicted")
                        .HasColumnType("TEXT");

                    b.Property<string>("ULN")
                        .HasColumnType("TEXT");

                    b.Property<string>("measured")
                        .HasColumnType("TEXT");

                    b.Property<string>("predicted")
                        .HasColumnType("TEXT");

                    b.Property<string>("zscore")
                        .HasColumnType("TEXT");

                    b.HasKey("GliId");

                    b.HasIndex("PatientId")
                        .IsUnique();

                    b.ToTable("glis");
                });

            modelBuilder.Entity("api.entities.Patient", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("ERV")
                        .HasColumnType("TEXT");

                    b.Property<string>("FEV1")
                        .HasColumnType("TEXT");

                    b.Property<string>("IC")
                        .HasColumnType("TEXT");

                    b.Property<string>("RV")
                        .HasColumnType("TEXT");

                    b.Property<string>("TLC")
                        .HasColumnType("TEXT");

                    b.Property<string>("VC")
                        .HasColumnType("TEXT");

                    b.Property<float>("age")
                        .HasColumnType("REAL");

                    b.Property<int>("gender")
                        .HasColumnType("INTEGER");

                    b.Property<float>("height")
                        .HasColumnType("REAL");

                    b.Property<float>("weight")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("api.entities.CAS", b =>
                {
                    b.HasOne("api.entities.Patient", "Patient")
                        .WithOne("CAS")
                        .HasForeignKey("api.entities.CAS", "PatientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Patient");
                });

            modelBuilder.Entity("api.entities.GLI", b =>
                {
                    b.HasOne("api.entities.Patient", "Patient")
                        .WithOne("GLI")
                        .HasForeignKey("api.entities.GLI", "PatientId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Patient");
                });

            modelBuilder.Entity("api.entities.Patient", b =>
                {
                    b.Navigation("CAS");

                    b.Navigation("GLI");
                });
#pragma warning restore 612, 618
        }
    }
}
