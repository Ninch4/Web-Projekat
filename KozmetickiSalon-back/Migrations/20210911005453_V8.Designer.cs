﻿// <auto-generated />
using System;
using KozmetickiSalon_back.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace KozmetickiSalon_back.Migrations
{
    [DbContext(typeof(SalonContext))]
    [Migration("20210911005453_V8")]
    partial class V8
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("KozmetickiSalon_back.Models.Salon", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Kapacitet")
                        .HasColumnType("int")
                        .HasColumnName("Kapacitet");

                    b.Property<int>("KrajRada")
                        .HasColumnType("int")
                        .HasColumnName("Kraj rada");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.Property<int>("PocetakRada")
                        .HasColumnType("int")
                        .HasColumnName("Pocetak rada");

                    b.Property<int>("USmeni")
                        .HasColumnType("int")
                        .HasColumnName("Usmeni");

                    b.Property<int>("UkupnoTermina")
                        .HasColumnType("int")
                        .HasColumnName("UkupnoTermina");

                    b.HasKey("ID");

                    b.ToTable("Salon");
                });

            modelBuilder.Entity("KozmetickiSalon_back.Models.Smena", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Broj")
                        .HasColumnType("int")
                        .HasColumnName("Broj");

                    b.Property<int>("BrojSmene")
                        .HasColumnType("int")
                        .HasColumnName("Broj smene");

                    b.Property<string>("Radnik")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Radnik");

                    b.Property<int?>("SalonID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("SalonID");

                    b.ToTable("Smena");
                });

            modelBuilder.Entity("KozmetickiSalon_back.Models.Termin", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("BrojTermina")
                        .HasColumnType("int")
                        .HasColumnName("BrojTermina");

                    b.Property<int>("MaxMusterija")
                        .HasColumnType("int")
                        .HasColumnName("Max  musterija");

                    b.Property<string>("Musterije")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("Musterije");

                    b.Property<int?>("SalonID")
                        .HasColumnType("int");

                    b.Property<string>("TipUsluge")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Tip usluge");

                    b.Property<int>("Trenutno")
                        .HasColumnType("int")
                        .HasColumnName("Trenutno");

                    b.HasKey("ID");

                    b.HasIndex("SalonID");

                    b.ToTable("Termin");
                });

            modelBuilder.Entity("KozmetickiSalon_back.Models.Zaposleni", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Ime")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Ime");

                    b.Property<string>("Prezime")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Prezime");

                    b.Property<int?>("SalonID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("SalonID");

                    b.ToTable("Zaposleni");
                });

            modelBuilder.Entity("KozmetickiSalon_back.Models.Smena", b =>
                {
                    b.HasOne("KozmetickiSalon_back.Models.Salon", "Salon")
                        .WithMany("Smene")
                        .HasForeignKey("SalonID");

                    b.Navigation("Salon");
                });

            modelBuilder.Entity("KozmetickiSalon_back.Models.Termin", b =>
                {
                    b.HasOne("KozmetickiSalon_back.Models.Salon", "Salon")
                        .WithMany("Termini")
                        .HasForeignKey("SalonID");

                    b.Navigation("Salon");
                });

            modelBuilder.Entity("KozmetickiSalon_back.Models.Zaposleni", b =>
                {
                    b.HasOne("KozmetickiSalon_back.Models.Salon", "Salon")
                        .WithMany("Zaposleni")
                        .HasForeignKey("SalonID");

                    b.Navigation("Salon");
                });

            modelBuilder.Entity("KozmetickiSalon_back.Models.Salon", b =>
                {
                    b.Navigation("Smene");

                    b.Navigation("Termini");

                    b.Navigation("Zaposleni");
                });
#pragma warning restore 612, 618
        }
    }
}
