using Microsoft.EntityFrameworkCore.Migrations;

namespace KozmetickiSalon_back.Migrations
{
    public partial class V26 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Usmeni",
                table: "Salon",
                newName: "USmeni");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "USmeni",
                table: "Salon",
                newName: "Usmeni");
        }
    }
}
