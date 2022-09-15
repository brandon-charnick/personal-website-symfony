<?php
declare(strict_types = 1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function number(): Response
    {
		$max = 100000;
        $number = random_int(0, $max);

        return new Response(
            '<html><body> number: '.$number.'</body></html>'
        );
    }
}