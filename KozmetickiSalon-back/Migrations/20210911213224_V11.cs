using Microsoft.EntityFrameworkCore.Migrations;

namespace KozmetickiSalon_back.Migrations
{
    public partial class V11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Broj",
                table: "Smena");

            migrationBuilder.DropColumn(
                name: "Kapacitet",
                table: "Salon");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Broj",
                table: "Smena",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Kapacitet",
                table: "Salon",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
