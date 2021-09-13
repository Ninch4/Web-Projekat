using Microsoft.EntityFrameworkCore.Migrations;

namespace KozmetickiSalon_back.Migrations
{
    public partial class V25 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "KrajRada",
                table: "Salon");

            migrationBuilder.DropColumn(
                name: "PocetakRada",
                table: "Salon");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "KrajRada",
                table: "Salon",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "PocetakRada",
                table: "Salon",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
