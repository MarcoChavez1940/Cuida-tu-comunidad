<?php

namespace Database\Seeders;

use App\Models\State;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $state = new State();
        $state->name = "Aguascalientes";
        $state->initials = "Ags.";
        $state->save();

        $state2 = new State();
        $state2->name = "Baja California";
        $state2->initials = "B.C.";
        $state2->save();

        $state3 = new State();
        $state3->name = "Baja California Sur";
        $state3->initials = "B.C.S.";
        $state3->save();

        $state4 = new State();
        $state4->name = "Campeche";
        $state4->initials = "Camp.";
        $state4->save();

        $state5 = new State();
        $state5->name = "Chiapas";
        $state5->initials = "Chis.";
        $state5->save();

        $state6 = new State();
        $state6->name = "Chihuahua";
        $state6->initials = "Chih.";
        $state6->save();

        $state7 = new State();
        $state7->name = "Ciudad de México";
        $state7->initials = "C.D.Mx.";
        $state7->save();

        $state8 = new State();
        $state8->name = "Coahuila";
        $state8->initials = "Coah.";
        $state8->save();

        $state9 = new State();
        $state9->name = "Colima";
        $state9->initials = "Col.";
        $state9->save();

        $state10 = new State();
        $state10->name = "Durango";
        $state10->initials = "Dgo.";
        $state10->save();

        $state11 = new State();
        $state11->name = "Guanajuato";
        $state11->initials = "Gto.";
        $state11->save();

        $state12 = new State();
        $state12->name = "Guerrero";
        $state12->initials = "Gro.";
        $state12->save();

        $state13 = new State();
        $state13->name = "Hidalgo";
        $state13->initials = "Hgo.";
        $state13->save();

        $state14 = new State();
        $state14->name = "Jalisco";
        $state14->initials = "Jal.";
        $state14->save();

        $state15 = new State();
        $state15->name = "México";
        $state15->initials = "Edo. Méx";
        $state15->save();

        $state16 = new State();
        $state16->name = "Michoacán";
        $state16->initials = "Mich.";
        $state16->save();

        $state17 = new State();
        $state17->name = "Morelos";
        $state17->initials = "Mor.";
        $state17->save();

        $state18 = new State();
        $state18->name = "Nayarit";
        $state18->initials = "Nay.";
        $state18->save();

        $state19 = new State();
        $state19->name = "Nuevo León";
        $state19->initials = "N.L.";
        $state19->save();

        $state20 = new State();
        $state20->name = "Oaxaca";
        $state20->initials = "Oax.";
        $state20->save();

        $state21 = new State();
        $state21->name = "Puebla";
        $state21->initials = "Pue.";
        $state21->save();

        $state22 = new State();
        $state22->name = "Querétaro";
        $state22->initials = "Qro.";
        $state22->save();

        $state23 = new State();
        $state23->name = "Quintana Roo";
        $state23->initials = "Q. Roo.";
        $state23->save();

        $state24 = new State();
        $state24->name = "San Luis Potosí";
        $state24->initials = "S.L.P.";
        $state24->save();

        $state25 = new State();
        $state25->name = "Sinaloa";
        $state25->initials = "Sin.";
        $state25->save();

        $state26 = new State();
        $state26->name = "Sonora";
        $state26->initials = "Son.";
        $state26->save();

        $state27 = new State();
        $state27->name = "Tabasco";
        $state27->initials = "Tab.";
        $state27->save();

        $state28 = new State();
        $state28->name = "Sinaloa";
        $state28->initials = "Sin.";
        $state28->save();

        $state29 = new State();
        $state29->name = "Tamaulipas";
        $state29->initials = "Tambs.";
        $state29->save();

        $state30 = new State();
        $state30->name = "Tlaxcala";
        $state30->initials = "Tlax.";
        $state30->save();

        $state31 = new State();
        $state31->name = "Veracruz";
        $state31->initials = "Ver.";
        $state31->save();

        $state32 = new State();
        $state32->name = "Yucatán";
        $state32->initials = "Yuc.";
        $state32->save();

        $state33 = new State();
        $state33->name = "Zacatecas";
        $state33->initials = "Zac.";
        $state33->save();
    }
}
