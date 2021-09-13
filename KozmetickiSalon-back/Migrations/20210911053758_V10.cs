using Microsoft.EntityFrameworkCore.Migrations;

namespace KozmetickiSalon_back.Migrations
{
    public partial class V10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Tip usluge",
                table: "Termin",
                newName: "TipUsluge");

            migrationBuilder.RenameColumn(
                name: "Max  musterija",
                table: "Termin",
                newName: "MaxMusterija");

            migrationBuilder.RenameColumn(
                name: "Broj smene",
                table: "Smena",
                newName: "BrojSmene");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TipUsluge",
                table: "Termin",
                newName: "Tip usluge");

            migrationBuilder.RenameColumn(
                name: "MaxMusterija",
                table: "Termin",
                newName: "Max  musterija");

            migrationBuilder.RenameColumn(
                name: "BrojSmene",
                table: "Smena",
                newName: "Broj smene");
        }
    }
}
