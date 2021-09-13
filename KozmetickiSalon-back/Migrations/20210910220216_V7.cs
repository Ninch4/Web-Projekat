using Microsoft.EntityFrameworkCore.Migrations;

namespace KozmetickiSalon_back.Migrations
{
    public partial class V7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Ukupno termina",
                table: "Salon",
                newName: "UkupnoTermina");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UkupnoTermina",
                table: "Salon",
                newName: "Ukupno termina");
        }
    }
}
