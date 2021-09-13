using Microsoft.EntityFrameworkCore.Migrations;

namespace KozmetickiSalon_back.Migrations
{
    public partial class V15 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "VremeTermina",
                table: "Termin",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VremeTermina",
                table: "Termin");
        }
    }
}
