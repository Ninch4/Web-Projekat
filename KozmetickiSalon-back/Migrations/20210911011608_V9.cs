using Microsoft.EntityFrameworkCore.Migrations;

namespace KozmetickiSalon_back.Migrations
{
    public partial class V9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Pocetak rada",
                table: "Salon",
                newName: "PocetakRada");

            migrationBuilder.RenameColumn(
                name: "Kraj rada",
                table: "Salon",
                newName: "KrajRada");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PocetakRada",
                table: "Salon",
                newName: "Pocetak rada");

            migrationBuilder.RenameColumn(
                name: "KrajRada",
                table: "Salon",
                newName: "Kraj rada");
        }
    }
}
