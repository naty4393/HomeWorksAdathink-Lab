export const modal = (name, codigo, prom, div) => {
   const modal = `
									<div class="container-modal">
										<div class="modal-dialog" role="document">
												<div class="modal-content">
													<div class="modal-header">
															<button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close">
																<span aria-hidden="true">&times;</span>
															</button>
													</div>
													<div class="modal-body">
														<div>
															<h5>Nombre Completo:</h5>
															<p>${name}</p>
															<h5>Código:</h5>
															<p>${codigo}</p>
															<h3>Promedio:</h3>
															<p>${prom}</p>
														</div>
													</div>
												</div>
										</div>
									</div>
								`
	div.innerHTML = modal;
	div.querySelector('#close').addEventListener('click', () => {
		window.location.href = '#/';
		div.classList.add('hidden');
	})
	return div;
}